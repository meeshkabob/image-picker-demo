import * as imagepicker from "@nativescript/imagepicker";

export const context = imagepicker.create({
    mode: "single", // use "multiple" for multiple selection
    mediaType: imagepicker.ImagePickerMediaType.Image,
    showAdvanced: false,
});
