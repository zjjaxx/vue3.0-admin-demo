export declare interface FileItem {
    uid: string;
    name?: string;
    status?: string;
    response?: string;
    url?: string;
}

export declare interface FileInfo {
    file: FileItem;
    fileList: FileItem[];
}