import React from 'react';
import cover from './cover2.JPG';

const styles = {
    img: {
        maxWidth: '100%',
        height: 'auto',
        maxHeight: '100%',
    }
}

export default function Cover(props) {
  return (
      <img src={cover} style={styles.img} alt="cover" />
  )
}