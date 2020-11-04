import { Component, NgZone, OnInit } from "@angular/core";
import { ImageAsset } from "@nativescript/core";
import { context } from "../shared/image-loader.context";

@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html",
})
export class BrowseComponent implements OnInit {
    imageSrc = null as ImageAsset | null;
    thumbSize: number = 80;
    previewSize: number = 300;

    constructor(private _ngZone: NgZone) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }

    on = {
        delete: () => {
            this.imageSrc = null;
        },
        launch: () => {
            context
                .authorize()
                .then(() => {
                    console.log("> authorized");
                    this.imageSrc = null;
                    return context.present();
                })
                .then((selection) => {
                    this._ngZone.run(() => {
                        console.log(
                            "Selection done: " + JSON.stringify(selection)
                        );
                        this.imageSrc =
                            selection.length > 0 ? selection[0] : null;
                    });
                })
                .catch((e) => {
                    console.log("> error", e);
                    // process error
                });
        },
    };
}
