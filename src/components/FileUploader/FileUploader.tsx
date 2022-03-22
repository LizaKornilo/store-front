import React, { useRef, useState } from 'react';
import './FileUploader.scss';

interface Props {
  defaultImage?: string,
  setImageFile: Function,
}

function FileUploader({ defaultImage, setImageFile }: Props) {
  const fileInput = useRef(null);
  const dropElement = useRef(null);
  const dropThumb = useRef(null);
  const [dropZoneIsOver, setDropZoneIsOver] = useState(false);
  /* eslint-disable no-unneeded-ternary */
  const [thumbIsVisible, setThumbIsVisible] = useState((defaultImage) ? true : false);

  const updateThumbail = (file: File) => {
    setThumbIsVisible(true);
    // @ts-ignore: Object is possibly 'null'.
    dropThumb.current.dataset.label = file.name;
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // @ts-ignore: Object is possibly 'null'.
        dropThumb.current.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      // @ts-ignore: Object is possibly 'null'.
      dropThumb.current.style.backgroundImage = null;
    }
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    if (event.dataTransfer.files.length) {
      // @ts-ignore: Object is possibly 'null'.
      dropElement.current = event.dataTransfer.files;
      const file = event.dataTransfer.files[0];
      updateThumbail(file);
      setImageFile(file);
    }
  };

  const handleChange = () => {
    // @ts-ignore: Object is possibly 'null'.
    if (fileInput.current.files.length) {
      // @ts-ignore: Object is possibly 'null'.
      const file = fileInput.current.files[0];
      updateThumbail(file);
      setImageFile(file);
    }
  };

  return (
    <div
      className={dropZoneIsOver ? 'drop-zone drop-zone--over' : 'drop-zone'}
      ref={dropElement}
      onDragOver={(e) => { e.preventDefault(); setDropZoneIsOver(true); }}
      onDragLeave={(e) => { e.preventDefault(); setDropZoneIsOver(false); }}
      onDragEnd={(e) => { e.preventDefault(); setDropZoneIsOver(false); }}
      onDrop={(e) => handleDrop(e)}
      role="button"
      tabIndex={0}
      // @ts-ignore: Object is possibly 'null'.
      onClick={() => fileInput.current.click()}
      // @ts-ignore: Object is possibly 'null'.
      onKeyDown={() => fileInput.current.click()}
    >
      <span className={thumbIsVisible ? 'hide' : 'drop-zone__prompt'}>
        Перетащите файл или нажмите для загрузки
      </span>
      <div
        className={thumbIsVisible ? 'drop-zone__thumb' : 'hide'}
        ref={dropThumb}
        data-label={defaultImage}
        style={{ backgroundImage: `url(${defaultImage})` }}
      />

      <input
        className="drop-zone__input"
        type="file"
        accept=".jpg, .jpeg, .png"
        ref={fileInput}
        onChange={() => handleChange()}
      />
    </div>
  );
}

FileUploader.defaultProps = {
  defaultImage: null,
};

export default FileUploader;
