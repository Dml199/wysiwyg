import React, {Component} from "react"


export class FileManager { 
    constructor () {

        this.options = {
            image: {
              multiple: true,
              types: [
                {
                  description: "Images",
                  accept: { "image/*": [".png", ".gif", ".jpeg", ".jpg"] },
                },
              ],
            },
      
            video: {
              multiple: true,
              types: [
                {
                  description: "Video",
                  accept: {
                    "video/*": [
                      ".mp4",
                      ".flv",
                      ".vob",
                      ".avi",
                      ".wmv",
                      ".mpg",
                      ".gif",
                    ],
                  },
                },
              ],
            },
      
            SVG: {
              multiple: true,
              types: [{ description: "SVG", accept: { "SVG/*": [".svg"] } }],
            },
          };
    }

     getParam (){ return this.options }

    async getObjectsAsURL (options) {
         {
        let fileHandle = await window.showOpenFilePicker(options);
        const fileArray = fileHandle.map(async (file) => {
          return file.getFile();
        });
        const files = await Promise.all(fileArray);
        const url_string = files.map((file) => {
          return URL.createObjectURL(file);
        });
          
        return url_string;
      };
    }


}