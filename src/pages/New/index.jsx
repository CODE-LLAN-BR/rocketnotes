import { Link } from 'react-router-dom';

import{ Header } from "../../components/Header";
import{ Input } from "../../components/Input";
import{ Textarea } from "../../components/Textarea";
import{ NoteItem } from "../../components/NoteItem";
import{ Section } from "../../components/Section";
import{ Button } from "../../components/Button";


import { Container ,Form } from "./styles";


export function New() {
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>

                        <Link to = "/">Voltar</Link>
                    </header>

                    <Input placeholder = "Título"/>

                    <Textarea placeholder = "Observações"/>

                    <Section title = "Links úteis">                     
                        <NoteItem value="https://rocketseat.com.br"/>

                        <NoteItem
                        placeholder="Novo link"
                        isNew/>  
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                        <NoteItem value="React"/>

                        <NoteItem
                        placeholder="Novo link"
                        isNew/>  
                        </div>
                    </Section>

                    <Button title = "Salvar"/>
                </Form>
            </main>           
        </Container>
    );
};