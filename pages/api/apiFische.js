// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const arrayOfObjects = [{
  id: 0,
  name: "Lachs",
  gattung: "Salmo",
  wasser: "Süßwasserfisch",
  pictureurl: "https://www.chefsculinar.de/chefsculinar/ds_img/assets_800/wk-01-lachs02.jpg",
},
{
  id: 1,
  name: "Makrele",
  gattung: "Scomber",
  wasser: "Salzwasserfisch",
  pictureurl: "https://www.lobsterking.de/pub/media/wysiwyg/lobsterking/blog/lexikon/fischlexikon/makrele/makrele-produkte.jpg",
},
{
  id: 2,
  name: "Steinbutt",
  gattung: "Scophthalmus",
  wasser: "Salzwasserfisch",
  pictureurl: "https://piasdeli.de/wp-content/uploads/2020/05/P5170035.jpeg",
},
]

export default function handler(req, res) {
  res.status(200).json(arrayOfObjects)
}
