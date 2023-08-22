import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  FormContainer,
  InputContainer,
  ButtonContainer,
  ErrorMessage,
} from './Login.styled';

import { requestLogin } from 'apis/request/auth';

import { ReactComponent as HFFLogo } from '../../assets/Logo.svg';
import AuthHelper from '../../components/AuthHelper/AuthHelper';
import LargeInput from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import useError from 'hooks/useError';
import useUser from 'hooks/useUser';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showIdError, setShowIdError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const navigate = useNavigate();
  const handleError = useError();
  const { login } = useUser();

  const handleId = (e) => {
    setId(e.target.value);
    setShowIdError(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setShowPasswordError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      setShowIdError(true);
    }
    if (!password) {
      setShowPasswordError(true);
    }
    if (id && password) {
      requestLogin({ id, password })
        .then((res) => {
          if (!res.data.isSuccess) throw res.data;
          else {
            login(res.data.result.jwt);
            navigate('/');
          }
        })
        .catch((e) => handleError(e));
    }
  };

  const goToMain = () => {
    navigate('/');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <HFFLogo onClick={goToMain} width={'64px'} height={'64px'} />
      <InputContainer>
        <LargeInput
          id="id"
          type="id"
          name="id"
          required
          placeholder="아이디를 입력해주세요."
          value={id}
          onChange={handleId}
        />
        {showIdError && <ErrorMessage>아이디를 입력해주세요</ErrorMessage>}
      </InputContainer>
      <InputContainer>
        <LargeInput
          id="password"
          type="password"
          name="password"
          required
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={handlePassword}
        />
        {showPasswordError && (
          <ErrorMessage>비밀번호를 입력해주세요</ErrorMessage>
        )}
      </InputContainer>
      <AuthHelper />
      <ButtonContainer>
        <Button type="submit" onClick={handleSubmit}>
          로그인
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default Login;
