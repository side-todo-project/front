import React from 'react';
import characterFirst from '@/public/assets/header/character-first.svg';
import Image from 'next/image';

// 유저 상태에 따른 변화
const CharacterStatusView = () => {
  return <Image src={characterFirst} alt="character-first" width={220.6} height={274.4} />;
};

export default CharacterStatusView;
