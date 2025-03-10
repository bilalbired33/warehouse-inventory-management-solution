<template>
  <admin-layout :title="$t('import_x', { x: $t('Items') })">
    <tec-form-section @submitted="submit">
      <template #title>{{ $t('import_x', { x: $t('Items') }) }}</template>
      <template #description>{{ $t('Please upload the excel file to import records.') }}</template>

      <template #form>
        <div>
          <label for="file-upload" class="block font-medium text-gray-700">{{ $t('Excel File') }}</label>
          <div
            :class="$page.props.errors.excel ? 'border-red-500' : 'border-gray-300'"
            class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md"
          >
            <div class="space-y-1 text-center">
              <icons name="doc-text" class="mx-auto h-12 w-12 text-gray-400" />
              <div class="flex items-center justify-center text-gray-600 py-2">
                <label
                  for="file-upload"
                  class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-300"
                >
                  <span v-if="selected" class="font-semibold">{{ $t('Change file') }}</span>
                  <span v-else class="font-semibold">{{ $t('Select file') }}</span>
                  <input
                    ref="file"
                    type="file"
                    class="sr-only"
                    id="file-upload"
                    name="file-upload"
                    @change="updateFile"
                    accept=".xls,.xlsx,application/vnd.ms-excel"
                  />
                </label>
                <p class="pl-1">{{ $t('or drag and drop') }}</p>
              </div>
              <div class="text-xs text-gray-700">
                <div>
                  {{
                    $t(
                      'Excel file should have name, code, photo, sku, symbology, unit, categories, details, has_serial, track_weight, track_quantity, alert_quantity, has_variants & variants columns.'
                    )
                  }}
                </div>
                <div>
                  {{ $t('You must fill the name, code and categories columns.') }}
                  {{ $t('Photo is the image name with extension relative to `public/assets/items/`') }}
                </div>
                <div>
                  {{ $t('Unit and categories should be unit/category code and already added to the system before importing items.') }}
                </div>
                <div>
                  {{ $t('has_serial, track_weight, track_quantity & has_variants are booleans and should have `yes` value to enable.') }}
                </div>
                <div>
                  {{
                    $t(
                      'Variants should be separated by pipe `|` as [Variant Name=Options(separated by comma)] e.g. Color=Red,Green|Size:S,M,L'
                    )
                  }}
                </div>
              </div>
              <div v-if="selected" class="inline-block pt-4">
                <div class="px-3 py-1 rounded-md border font-bold text-lg">{{ $t('Selected File') }}: {{ selected }}</div>
              </div>
              <div v-if="$page.props.errors.excel" class="mt-4 pt-2 text-red-600 rounded-md">
                {{ $page.props.errors.excel }}
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #actions>
        <loading-button :loading="form.processing" :disabled="form.processing">{{ $t('Import') }}</loading-button>
      </template>
    </tec-form-section>
  </admin-layout>
</template>

<script>
import FileInput from '@/Shared/FileInput.vue';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import LoadingButton from '@/Shared/LoadingButton.vue';
import TecFormSection from '@/Jetstream/FormSection.vue';
import TecSecondaryButton from '@/Jetstream/SecondaryButton.vue';

export default {
  props: ['parents'],

  components: {
    FileInput,
    AdminLayout,
    LoadingButton,
    TecFormSection,
    TecSecondaryButton,
  },

  data() {
    return {
      selected: null,
      form: this.$inertia.form({ _method: 'POST', excel: null }),
    };
  },

  methods: {
    updateFile(e) {
      this.selected = e.target.files[0].name;
    },
    submit() {
      if (this.$refs.file) {
        this.form.excel = this.$refs.file.files[0];
      }

      // var data = new FormData();
      // data.append('excel', this.form.excel);
      // data.append('_method', this.form._method);
      // this.$inertia.post(route('items.import.save'), data);
      this.form.post(route('items.import.save'), { preserveScroll: true });
    },
  },
};
</script>
