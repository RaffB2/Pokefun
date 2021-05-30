import { pokeDataType } from "./types";

export const pokeData: pokeDataType[] = [
  {
    name: "Pikachu",
    isPoke: true,
    desc: "Pikachu is a short, chubby rodent Pokémon. It is covered in yellow fur with two horizontal brown stripes on its back. It has a small mouth, long, pointed ears",
    img: "http://pngimg.com/uploads/pokemon/pokemon_PNG148.png"
  },
  {
    name: "Kibana",
    isPoke: false,
    desc: "Kibana is a free and open user interface that lets you visualize your Elasticsearch data and navigate the Elastic Stack",
    img: "data:image/png;base64,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"
  },
  {
    name: "Kakuna",
    isPoke: true,
    desc: "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy. ",
    img: "https://cdn2.bulbagarden.net/upload/thumb/f/f0/014Kakuna.png/250px-014Kakuna.png"
  },
  {
    name: "Tangela",
    isPoke: true,
    desc: "Tangela is a Grass type Pokémon introduced in Generation 1. It is known as the Vine Pokémon.",
    img: "https://img.pokemondb.net/artwork/tangela.jpg"
  }
  , {
    name: "Hoppip",
    isPoke: true,
    desc: "Hoppip is a Grass/Flying type Pokémon introduced in Generation 2. It is known as the Cottonweed Pokémon.",
    img: "https://img.pokemondb.net/artwork/hoppip.jpg"
  },
  {
    name: "Shuckle",
    isPoke: true,
    desc: "Shuckle is a Bug/ Rock type Pokémon introduced in Generation 2. It is known as the Mold Pokémon.",
    img: "https://img.pokemondb.net/artwork/shuckle.jpg"
  },
  {
    name: "Eevee",
    isPoke: true,
    desc: "Eevee is a Normal type Pokémon introduced in Generation 1. It is known as the Evolution Pokémon.",
    img: "https://img.pokemondb.net/artwork/eevee.jpg"
  },
  {
    name: "Arbok",
    isPoke: true,
    desc: "Arbok is a Poison type Pokémon introduced in Generation 1. It is known as the Cobra Pokémon.",
    img: "https://img.pokemondb.net/artwork/arbok.jpg"
  },
  {
    name: "Corsola",
    isPoke: true,
    desc: "  Corsola is a Water/Rock type Pokémon introduced in Generation 2. It is known as the Coral Pokémon.",
    img: "https://img.pokemondb.net/artwork/corsola.jpg"
  },
  {
    name: "Mantine",
    isPoke: true,
    desc: "Mantine is a Water/Flying type Pokémon introduced in Generation 2. It is known as the Kite Pokémon.",
    img: "https://img.pokemondb.net/artwork/mantine.jpg"
  },
  {
    name: "Maven",
    isPoke: false,
    desc: "Maven is a build automation tool used primarily for Java projects. Maven can also be used to build and manage projects written in C#, Ruby, Scala, and other languages",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Apache_Maven_logo.svg/2560px-Apache_Maven_logo.svg.png"
  },
  {
    name: "Pandas",
    isPoke: false,
    desc: "Pandas is a library created to help developers work with labeled and relational data intuitively. It's based on two main data structures: Series (one-dimensional, like a list of items) and Data Frames (two-dimensional, like a table with multiple columns). ",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAEDCAMAAABQ/CumAAAAeFBMVEX///8TB1QAAEb/ygDnBIgPAFLNzNYTAFnQ0NgMAFcAAETb2eP39/oUBlfV1N7/xwDmAID/9tfLydcjG17/4Yz//vbCwM3ykcL61OfoBIwyKmgAADYAAE0AAErx8PTIxdT/+un/34T85/Lyir/lAHv50eX+9fkpH2Ma8J+4AAACEklEQVR4nO3dzVIaQRSAUYNCEIGoiYmJivnP+79hFrmLVHELZ6pnmG483xqaPruh5lb32ZkkSZIkSZIkvb52z7dZU2+rT4uH2X6rx6m31afF7M1+87dTb6tPCDWEUEMINYRQQ5MS1tu0nqtMSrhKn26e1v1WmZawyn58g4DQL4QIoSyECKEshAihLIQIoSyECKEshAihLIQIoSyECKEshAihLIQIoSyECOFA6cvM5a4nYb29yjoO4WmVvM58WPQkbF8e+RqPcDlPVp4t+xLS/W0QEBCqI8yTLpsizN8n/WmJ0CEEBAQEBAQEBIT2CF+/fci6a4hw8y7rvC3CeRYCAgICAgICAgICAgICwlCEtJYIdzdp/3+kdkKHToFQ+RjJMCEcCKF7CAdC6B7CgRC6Nylh9zGtJUJ6uNCsnsOFhhkvPAHC9x+fsloi/Pp5nXTREuH++iLpMwICAgICAgICAgICAgKC/87R7/u0lggdQkBAQEBAQEB4dYQON67UTqh9KuwkDlRBQED4R8gOF5o3Rdh8yepLGO0ez6MNPO+WQ9w3NilhvBAihLIQIoSyECKEshAihLIQIoSyECKEshAihLIQIoSyECKEshAihLIQIoSyEKJt+lL0SNeADUR4TG9cGWXHew10AkPP4aRBO9ohEuOFUEMINYRQQwg1dAKEDvd41t5t2u7lL0qSJEmSJEnSyfUXeomSFq0EzbkAAAAASUVORK5CYII="
  },
  {
    name: "Theano",
    isPoke: false,
    desc: "Theano is a Python library and optimizing compiler for manipulating and evaluating mathematical expressions, especially matrix-valued ones. In Theano, computations are expressed using a NumPy-esque syntax and compiled to run efficiently on either CPU or GPU architectures. ",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Theano_logo.svg/220px-Theano_logo.svg.png"
  },
  {
    name: "Scipy",
    isPoke: false,
    desc: "The SciPy library is one of the core packages that make up the SciPy stack. It provides many user-friendly and efficient numerical routines, such as routines for numerical integration, interpolation, optimization, linear algebra, and statistics. .",
    img: "https://e7.pngegg.com/pngimages/665/534/png-clipart-scipy-numpy-python-scikit-learn-pip-others-miscellaneous-blue.png"
  },
  {
    name: "Bokeh",
    isPoke: false,
    desc: "Bokeh is a Python library for interactive visualization that targets web browsers for representation. ... These bindings produce a JSON file, which works as an input for BokehJS (a Javascript library), which in turn presents data to the modern web browsers. Bokeh can produce elegant and interactive visualization like D3.",
    img: "https://pyviz-dev.github.io/pyviz/assets/bokeh.png  "
  },
  {
    name: "Mockito",
    isPoke: false,
    desc: "Mockito is the most widely used mocking library in Java. Whether you are testing a small project or a huge, complex Enterprise Java project, you can use Mockito everywhere.",
    img: "https://static.javatpoint.com/tutorial/mockito/images/mockito.png"
  }
];
