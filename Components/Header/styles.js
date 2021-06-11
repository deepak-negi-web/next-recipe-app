import styled from "styled-components";

export const StyledHeader = styled.header`
  .headerUserLink {
    font-family: "Open Sans", sans-serif;
    color: #2f2d4e;
    text-transform: capitalize;
    font-size: 14px;
    padding: 33px 0;
    display: inline-block;
  }

  .headerUserLink:hover {
    color: #e22104;
  }

  @media all and (min-width: 992px) {
    .dropdown {
      margin: 0 !important;
    }

    .dropdown-menu {
      display: none !important;
    }

    .dropdown:hover + .dropdown-menu,
    .dropdown-menu:hover {
      display: block !important;
      margin: 0 !important;
    }
  }
`;
