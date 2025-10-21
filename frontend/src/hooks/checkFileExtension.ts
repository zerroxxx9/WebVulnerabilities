import { useState } from "react";

type AllowedExtensions = string[];

interface UseFileExtensionValidatorResult {
    isValid: boolean;
    invalidFiles: File[];
    validateFiles: (files: FileList | File[], allowedExtensions: AllowedExtensions) => void;
}

export const useFileExtensionValidator = (): UseFileExtensionValidatorResult => {
    const [isValid, setIsValid] = useState<boolean>(true);
    const [invalidFiles, setInvalidFiles] = useState<File[]>([]);

    const validateFiles = (files: FileList | File[], allowedExtensions: AllowedExtensions) => {
        const allowed = allowedExtensions.map(ext => ext.toLowerCase());
        const invalid: File[] = [];

        Array.from(files).forEach(file => {
            const fileExtension = file.name.split(".").pop()?.toLowerCase();
            if (!fileExtension || !allowed.includes(fileExtension)) {
                invalid.push(file);
            }
        });

        setIsValid(invalid.length === 0);
        setInvalidFiles(invalid);
    };

    return { isValid, invalidFiles, validateFiles };
};
