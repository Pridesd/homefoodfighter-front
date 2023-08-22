import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import noImageSVG from '../../assets/MyPageSettingProfileDefaultImage.svg';
import MyPageProfileEdit from '../../assets/MyPageProfileEdit.svg';
import MyPageJJim from '../../assets/DetailrecipeJjimIcon.svg';
import MyPageMyReview from '../../assets/MyPageMyReviewImage.svg';
import MyPageMyRecipe from '../../assets/MyPageMyRecipeImage.svg';
import MyPageSetting from '../../assets/MyPageSettingImage.svg';
import * as S from './MyPage.styles';
import { requestUser } from 'apis/request/auth';

const ImagePreview = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    requestUser().then((res) => setUserInfo(res.data.result[0].nickname));
  }, []);

  return (
    <div style={{ backgroundColor: 'white' }}>
      <Header
        item={
          <Link to="/mypage/setting">
            <img src={MyPageSetting} alt="Settings" />
          </Link>
        }
      >
        {' '}
      </Header>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Preview"
            style={{ width: '200px', marginTop: '20px' }}
          />
        ) : (
          <div>
            <img
              src={noImageSVG}
              style={{ width: '100px', marginTop: '20px' }}
            />
          </div>
        )}

        <div
          style={{ marginTop: '30px', marginBottom: '20px', fontSize: '18px' }}
        >
          <p>{userInfo}</p>
        </div>

        <S.MyPage>
          <S.MyPageItem
            to="/mypage/profileedit"
            style={{ borderLeftColor: 'white' }}
          >
            <S.MyPageImage to="/mypage/profileedit">
              <img
                src={MyPageProfileEdit}
                alt="프로필 수정"
                style={{ width: '50px' }}
              />
            </S.MyPageImage>
            <span>프로필 수정</span>
          </S.MyPageItem>

          <S.MyPageItem to="/jjimrecipe" style={{ borderRightColor: 'white' }}>
            <S.MyPageImage to="/jjimrecipe">
              <img
                src={MyPageJJim}
                alt="찜한 레시피"
                style={{
                  width: '35px',
                  marginBottom: '8px',
                  marginLeft: '0rem',
                }}
              />
            </S.MyPageImage>
            <span style={{ marginLeft: '0rem' }}>찜한 레시피</span>
          </S.MyPageItem>

          <S.MyPageButton
            to="/mypage/myreview"
            style={{ borderLeftColor: 'white' }}
          >
            <S.MyPageImage>
              <img
                src={MyPageMyReview}
                alt="내 리뷰"
                style={{ width: '40px', marginRight: '0rem' }}
              />
            </S.MyPageImage>
            <span>내 리뷰</span>
          </S.MyPageButton>

          <S.MyPageItem
            to="/mypage/myrecipe"
            style={{ borderRightColor: 'white' }}
          >
            <S.MyPageImage to="/mypage/myrecipe"></S.MyPageImage>
            <S.MyPageImage to="/mypage/myrecipe" style={{ marginLeft: '0rem' }}>
              <img
                src={MyPageMyRecipe}
                alt="내 레시피"
                style={{ width: '40px' }}
              />
            </S.MyPageImage>
            <span style={{ marginLeft: '0rem' }}>내 레시피</span>
          </S.MyPageItem>
        </S.MyPage>
      </div>
    </div>
  );
};

export default ImagePreview;
