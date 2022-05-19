import React from 'react';
import Advantage_NFT_Music from '../NFT/NFT_MusicToken/Advantage_NFT_Music/Advantage_NFT_Music';
import NFT_Music_Home from '../NFT/NFT_MusicToken/NFT_Music_Home/NFT_Music_Home';
import Life_Easier_NFT_Music from '../NFT/NFT_MusicToken/NFT_Music_Life_Ease/Life_Easier_NFT_Music';
import Offers_NFT_Music from '../NFT/NFT_MusicToken/Offers_NFT_Music/Offers_NFT_Music';

export default function NFT_MusicToken() {
  return <div>
  <NFT_Music_Home/>
  <Life_Easier_NFT_Music/>
  <Advantage_NFT_Music/>
  <Offers_NFT_Music/>
      
  </div>;
}
