import { Dispatch, SetStateAction } from "react"

type FileUploadProps = {
    imageUrl: string,
    onFiledChange: (value: string) => void,
    setFiles: Dispatch<SetStateAction<File[]>>
}

const FileUpload = ({ imageUrl, onFiledChange, setFiles }: FileUploadProps) => {
  return (
    <div>FileUpload</div>
  )
}

export default FileUpload 