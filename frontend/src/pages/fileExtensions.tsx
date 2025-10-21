import {useFileExtensionValidator} from "../hooks/checkFileExtension.ts";
import type {ChangeEvent} from "react";

const FileUploader = () => {
    const {isValid, invalidFiles, validateFiles} = useFileExtensionValidator();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            validateFiles(files, ["jpg", "png"]); // Erlaubte Endungen hier anpassen
        }
    };

    return (
        <div>
            <input type="file" multiple onChange={handleFileChange}/>
            {!isValid && (
                <div style={{color: "red"}}>
                    Ungültige Dateien:
                    <ul>
                        {invalidFiles.map(file => (
                            <li key={file.name}>{file.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
export default FileUploader