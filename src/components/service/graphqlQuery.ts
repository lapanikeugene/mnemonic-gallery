export const graphqlQuery  = `
  query NewQuery {
    posts {
      nodes {
        title
        textInfo {
          translate
          on
          mnemonic
          kun
          fieldGroupName
          description
        }
        mnemonicImage {
          imagefile {
            sourceUrl
          }
        }
      }
    }
  }
`