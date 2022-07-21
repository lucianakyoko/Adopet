import { useQuery, gql } from '@apollo/client';

import { PageContainer } from '../../components/PageContainer';
import { Animal } from './Animal';

import {
  AnimalsPageContainer,
  IntroParagraphWrapper,
  AnimalsList
} from './style';

const GET_PET_QUERY = gql`
  query {
    pets(stage: PUBLISHED) {
      id
      name
      age
      size
      characteristics
      city
      state
      image {
        fileName
        url
      }
    }
  }
`;



export function Animals() {
  const { loading, error, data } = useQuery(GET_PET_QUERY);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
 
  return(
    <PageContainer user={true}>
      <AnimalsPageContainer>
        <IntroParagraphWrapper>
          <p>Olá! Veja os amigos disponíveis para adoção!</p>
        </IntroParagraphWrapper>

        <AnimalsList>
          {data?.pets.map(pet => {
            return (
              <Animal 
                key={pet.id}
                image={pet.image.url}
                name={pet.name}
                size={pet.size}
                characteristics={pet.characteristics}
                city={pet.city}
                state={pet.state}
              />
            )
          })}
          {/* <Animal />
          <Animal />
          <Animal /> */}
        </AnimalsList >
      </AnimalsPageContainer>
    </PageContainer>
  )
}