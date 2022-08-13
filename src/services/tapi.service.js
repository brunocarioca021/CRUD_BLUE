const tapiocas = [
  {
    id: 1,
    sabor: 'Queijo com coco',
    descricao:
      'Tapioca tradicional.',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Queijo com charque',
    descricao:
      'Saborosa Tapioca Queijo com Charque.',
    preco: 15.0,
  },
  {
    id: 3,
    sabor: 'Queijo com charque, calabresa e verduras',
    descricao:
      'Tapioca Arretada.',
    preco: 18.0,
  },
  {
    id: 4,
    sabor: 'Queijo com goiabada',
    descricao:
      'Tapioca Romeu e Julieta.',
    preco: 12.0,
  },
];

const findTapiService = () => {
  return tapiocas;
};

const findTapiByIdService = (id) => {
  return tapiocas.find((tapioca) => tapioca.id == id);
};

const createTapiService = (newTapi) => {
  newTapi.id = tapiocas.length + 1;
  tapiocas.push(newTapi);
  return newTapi;
};

const updateTapiService = (id, tapiocaEdited) => {
  tapiocaEdited['id'] = id;
  tapiocas[tapiocas.findIndex((tapioca) => tapioca.id == id)] = tapiocaEdited;
  return tapiocaEdited;
};

const deleteTapiService = (id) => {
  return tapiocas.splice(tapiocas.findIndex((tapioca) => tapioca.id == id), 1);
};

module.exports = {
  findTapiService,
  findTapiByIdService,
  createTapiService,
  updateTapiService,
  deleteTapiService
};
