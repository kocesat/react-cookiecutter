import React, {useEffect, useRef, useState} from 'react';
import Segment from "../Segment";
import {
  Box,
  List,
  ListItem,
  ListIcon, Button, Flex
} from "@chakra-ui/react";
import styles from "./style.module.css";
import {MdCheckCircle} from "react-icons/all";

interface FileUploaderProps {
  onUpload: () => void;
}

const FileUploader: React.FC<FileUploaderProps> =
  ({ onUpload }: FileUploaderProps) => {
  const dropTargetRef = useRef(null);
  const [files, setFiles] = useState<Array<File>>([]);

  useEffect(() => {
    const data = new FormData();
    files.forEach(file => {
      data.append("file", file, file.name);
    });
  }, [files])

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event.dataTransfer.files)
  }

  const handleFileDrop = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newFile = e.target.files?.item(0);
    if (newFile) {
      const updatedList = [...files, newFile];
      setFiles(updatedList);
    }
  }

  return (
    <>
      <Segment>
        Upload your file
       <Box
         className={styles.fileUploadTarget}
         position='relative'
         ref={dropTargetRef}
         onDrop={handleDrop}
         onDragEnter={() => console.log("Dragging entered") }
         onDragLeave={() => console.log("Dragging leaved")}
       >
         Drag your file here
         <input
           className={styles.fileUploadTarget__input}
           type="file"
           value=""
           onChange={handleFileDrop}
           name="file"
         />
       </Box>
      <Flex my='10px' gap='10px' flexDirection='column' justifyContent='center' alignItems='center'>
        <Button
          onClick={onUpload}
          size='lg'
          colorScheme='teal'
        >
          Upload
        </Button>
        <List spacing={3}>
          {files.map((file, index) => (
            <ListItem key={index}>
              <ListIcon as={MdCheckCircle} color='green.500' />
              {file.name}
            </ListItem>
          )) }
        </List>
      </Flex>
      </Segment>
    </>
  );
}

export default FileUploader;