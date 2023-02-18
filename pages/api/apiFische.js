// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const arrayOfObjects = [{
  name: "Lachs",
  gattung: "Salmo",
  wasser: "Süßwasserfisch",
  pictureurl: "https://www.chefsculinar.de/chefsculinar/ds_img/assets_800/wk-01-lachs02.jpg",
},
{
  name: "Makrele",
  gattung: "Scomber",
  wasser: "Salzwasserfisch",
  pictureurl: "https://www.lobsterking.de/pub/media/wysiwyg/lobsterking/blog/lexikon/fischlexikon/makrele/makrele-produkte.jpg",
},
{
  name: "Steinbutt",
  gattung: "Scophthalmus",
  wasser: "Salzwasserfisch",
  pictureurl: "https://piasdeli.de/wp-content/uploads/2020/05/P5170035.jpeg",
},
]

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(arrayOfObjects)
  } else {
    res.status(404).json("broken")
  }

}
