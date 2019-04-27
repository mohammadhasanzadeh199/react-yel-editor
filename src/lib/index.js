import React, { Component } from "react";

import CKEditor from "@ckeditor/ckeditor5-react";

// NOTE: We use editor from source (not a build)!
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment"

const editorConfiguration = {
    plugins: [
        Essentials,
        Bold,
        Italic,
        Paragraph,
        Autoformat,
        BlockQuote,
        UploadAdapter,
        EasyImage,
        Heading,
        ImageStyle,
        ImageToolbar,
        ImageUpload,
        Link,
        List,
        Alignment
    ],
    toolbar: [
        "heading",
        "|",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "blockQuote",
        "|",
        "imageUpload",
        "|",
        "alignment",
        "|",
        "undo",
        "redo"
    ]
};

class YelEditor extends Component {
    render() {
        return (
            <div className="App">
                <CKEditor
                    editor={ClassicEditor}
                    config={editorConfiguration}
                    data={this.props.data}
                    onInit={this.props.onInit}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                    onFocus={this.props.onFocus}
                />
            </div>
        );
    }
}

export default YelEditor;
