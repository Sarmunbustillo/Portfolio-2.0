import styled from 'styled-components';

const SmallProjectStyles = styled.div`
  position: relative;
  min-width: var(--size-14);

  .project-picture {
    margin-bottom: var(--size-2);
    position: relative;

    a {
      display: flex;
      border: none;
    }

    img {
      object-fit: cover;
      object-position: center;
      aspect-ratio: 16/9;
      max-width: 70rem;
      width: 100%;
    }
  }
`;

export default SmallProjectStyles;
