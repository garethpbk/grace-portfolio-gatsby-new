const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const artTemplate = path.resolve(`src/components/art.js`);

    resolve(
      graphql(`
        {
          allContentfulGraceArtReference {
            edges {
              node {
                artReference {
                  id
                  name
                  year
                  size
                  materials {
                    materials
                  }
                  image {
                    title
                    file {
                      url
                    }
                  }
                  bigImage {
                    title
                    file {
                      url
                    }
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          console.log("ERROR!!!");
          reject(result.errors);
        }

        const art =
          result.data.allContentfulGraceArtReference.edges[0].node.artReference;

        const links = art.map((uno) =>
          uno.name.toLowerCase().replace(/ /g, "-")
        );

        art.forEach((edge, index) => {
          const slug = edge.name.toLowerCase().replace(/ /g, "-");
          createPage({
            path: `/${slug}`,
            component: artTemplate,
            context: {
              edge,
              index,
              links,
            },
          });
        });
        return;
      })
    );
  });
};
