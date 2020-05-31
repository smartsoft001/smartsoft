import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";

import {IStream, IStreamComment} from "@smartsoft001/stream-shell-dtos";

import { StreamProvider } from "../../providers";

@Component({
  selector: "smart-stream-sender",
  templateUrl: "./sender.component.html",
  styleUrls: ["./sender.component.scss"]
})
export class SenderComponent implements OnInit {
  private _id: string;

  mediaStreamConstraints: MediaStreamConstraints = {
    video: true,
    audio: true
  };
  mediaStream: MediaStream;

  item$: Observable<IStream>;

  @Input() set id(val: string) {
    this._id = val;
    this.item$ = this.provider.getById(this._id);
  }

  @ViewChild("videoRef", { static: false }) videoRef: ElementRef;

  constructor(private provider: StreamProvider) {}

  addComment(item: IStreamComment): void {
    this.provider.addComment(this._id , item);
  }

  ngOnInit(): void {
    this.provider.init();
    navigator.mediaDevices
      .getUserMedia(this.mediaStreamConstraints)
      .then(mediaStream => {
        this.mediaStream = mediaStream;
        this.videoRef.nativeElement.srcObject = mediaStream;
        this.videoRef.nativeElement.muted = true;
      })
      .catch(error => {
        console.log("Getting user media failed", error);
      });
  }
}
