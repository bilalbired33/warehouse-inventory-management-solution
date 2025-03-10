<template>
  <tec-action-section>
    <template #title>{{ $t('Two Factor Authentication') }}</template>

    <template #description>{{ $t('Add additional security to your account using two factor authentication.') }}</template>

    <template #content>
      <h3 class="text-lg font-medium text-gray-900" v-if="twoFactorEnabled">{{ $t('You have enabled two factor authentication.') }}</h3>

      <h3 class="text-lg font-medium text-gray-900" v-else>{{ $t('You have not enabled two factor authentication.') }}</h3>

      <div class="mt-3 text-gray-600">
        <p>
          {{
            $t(
              "When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application."
            )
          }}
        </p>
      </div>

      <div v-if="twoFactorEnabled">
        <div v-if="qrCode">
          <div class="mt-4 text-gray-600">
            <p class="font-semibold">
              {{ $t("Two factor authentication is enabled. Scan the following QR code using your phone's authenticator application.") }}
            </p>
          </div>

          <div class="mt-4 dark:p-4 dark:w-56 dark:bg-white" v-html="qrCode"></div>
        </div>

        <div v-if="recoveryCodes.length > 0">
          <div class="mt-4 text-gray-600">
            <p class="font-semibold">
              {{
                $t(
                  'Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.'
                )
              }}
            </p>
          </div>

          <div class="grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono bg-gray-100 rounded-lg">
            <div v-for="code in recoveryCodes" :key="code">
              {{ code }}
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <div v-if="!twoFactorEnabled">
          <tec-confirms-password @confirmed="enableTwoFactorAuthentication">
            <tec-button type="button" :class="{ 'opacity-25': enabling }" :disabled="enabling">{{ $t('Enable') }}</tec-button>
          </tec-confirms-password>
        </div>

        <div v-else>
          <tec-confirms-password @confirmed="showQrCode">
            <tec-secondary-button v-if="!qrCode" class="mr-3">{{ $t('Show QRCode') }}</tec-secondary-button>
          </tec-confirms-password>

          <tec-confirms-password @confirmed="showRecoveryCodes">
            <tec-secondary-button v-if="!recoveryCodes.length" class="mr-3">{{ $t('Show Recovery Codes') }}</tec-secondary-button>
          </tec-confirms-password>

          <tec-confirms-password @confirmed="regenerateRecoveryCodes">
            <tec-secondary-button class="mr-3" v-if="recoveryCodes.length > 0">{{ $t('Regenerate Recovery Codes') }}</tec-secondary-button>
          </tec-confirms-password>

          <tec-confirms-password @confirmed="showRecoveryCodes">
            <tec-secondary-button class="mr-3" v-if="recoveryCodes.data && recoveryCodes.data.length === 0">{{
              $t('Show Recovery Codes')
            }}</tec-secondary-button>
          </tec-confirms-password>

          <tec-confirms-password @confirmed="disableTwoFactorAuthentication">
            <tec-danger-button :class="{ 'opacity-25': disabling }" :disabled="disabling">{{ $t('Disable') }}</tec-danger-button>
          </tec-confirms-password>
        </div>
      </div>
    </template>
  </tec-action-section>
</template>

<script>
import TecButton from '@/Jetstream/Button.vue';
import TecDangerButton from '@/Jetstream/DangerButton.vue';
import TecActionSection from '@/Jetstream/ActionSection.vue';
import TecConfirmsPassword from '@/Jetstream/ConfirmsPassword.vue';
import TecSecondaryButton from '@/Jetstream/SecondaryButton.vue';

export default {
  components: {
    TecButton,
    TecDangerButton,
    TecActionSection,
    TecConfirmsPassword,
    TecSecondaryButton,
  },

  data() {
    return {
      enabling: false,
      disabling: false,

      qrCode: null,
      recoveryCodes: [],
    };
  },

  methods: {
    enableTwoFactorAuthentication() {
      this.enabling = true;

      this.$inertia.post(
        '/user/two-factor-authentication',
        {},
        {
          preserveScroll: true,
          onSuccess: () => Promise.all([this.showQrCode(), this.showRecoveryCodes()]),
          onFinish: () => (this.enabling = false),
        }
      );
    },

    showQrCode() {
      return axios.get('/user/two-factor-qr-code').then(response => {
        this.qrCode = response.data.svg;
      });
    },

    showRecoveryCodes() {
      return axios.get('/user/two-factor-recovery-codes').then(response => {
        this.recoveryCodes = response.data;
      });
    },

    regenerateRecoveryCodes() {
      axios.post('/user/two-factor-recovery-codes').then(response => {
        this.showRecoveryCodes();
      });
    },

    disableTwoFactorAuthentication() {
      this.disabling = true;

      this.$inertia.delete('/user/two-factor-authentication', {
        preserveScroll: true,
        onSuccess: () => (this.disabling = false),
      });
    },
  },

  computed: {
    twoFactorEnabled() {
      return !this.enabling && this.$page.props.auth.user.two_factor_enabled;
    },
  },
};
</script>
