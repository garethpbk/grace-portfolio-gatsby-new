const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const artTemplate = path.resolve(`src/components/art.js`);

    resolve(
      graphql(`
        {
          allContentfulGraceArt {
            edges {
              node {
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
                  fluid(maxWidth: 1920) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                  }
                  gatsbyImageData
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

        const links = result.data.allContentfulGraceArt.edges.map((uno) =>
          uno.node.name.toLowerCase().replace(/ /g, "-")
        );

        console.log({ links });

        result.data.allContentfulGraceArt.edges.forEach((edge, index) => {
          const slug = edge.node.name.toLowerCase().replace(/ /g, "-");
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
