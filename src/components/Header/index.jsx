import { Container ,Profile ,Logout } from "./styles";
import{ RiShutDownLine } from 'react-icons/ri';
export function Header() {
    return(
        <Container>
            <Profile>
                <img src="https://github.com/CODE-LLAN-BR.png" alt="Foto do usuário" />
                
                <div>
                    <span>Bem-vindo,</span>
                    <strong>Leonardo Nunes</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout> 
        </Container>
    );
};