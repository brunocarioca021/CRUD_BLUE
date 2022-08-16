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

const findTapiService = async () => {
  return tapiocas;
};

const findTapiByIdService = (id) => {
  return tapiocas.find((tapioca) => tapioca.id == id);
};

const createTapiService = (newTapi) => {
  newTapi.id = Math.max(...tapiocas.map(o => o.id)) + 1;
  tapiocas.push(newTapi);
  return newTapi;
};

const updateTapiService = (id, tapiocaEdited) => {
  tapiocaEdited['id'] = id;
  tapiocas[tapiocas.findIndex((tapioca) => tapioca.id == id)] = tapiocaEdited;
  return tapiocaEdited;
};

const deleteTapiService = (id) => {
  const tapiocaIndex = tapiocas.finfIndex((tapioca) => tapioca.id == id);
  const tapioca = tapiocas[tapiocaIndex];
  if(tapiocaIndex != -1){
    tapiocas.splice(tapiocaIndex, 1);
  }
  return tapioca;
};

module.exports = {
  findTapiService,
  findTapiByIdService,
  createTapiService,
  updateTapiService,
  deleteTapiService
};
