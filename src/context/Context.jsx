import { createContext, useState, useEffect, useRef } from "react";

export const Context = createContext();  

export function ContextProvider(props) {

    const [filter, setFilter] = useState("");
    const [exercises, setExercises] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [mostrarEjercicios, setMostrarEjercicios] = useState(true);

    const [mostrarModal, setMostrarModal] = useState(false)
    const [ejercicioModal, setEjercicioModal] = useState({})
    function handleModal(ejercicio) {
      setEjercicioModal(ejercicio)
      setMostrarModal(true)
    }

    const [mostrarRutinaModal, setMostrarRutinaModal] = useState(false)
    const [ejercicioRutinaModal, setEjercicioRutinaModal] = useState({})
    function handleRutinaModal(ejercicio) {
      setEjercicioRutinaModal(ejercicio)
      setMostrarRutinaModal(true)
    }
    async function fetchApi() {
      const url = `https://exercisedb.p.rapidapi.com/exercises${filter}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'f5fb05949cmsh763317659184c62p1d778fjsn6073f409d2ff',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
    
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          setExercises(result.slice(1, 100));
          console.log(exercises);
        } catch (error) {
          console.error(error);
        }
        setCurrentPage(1);
    }
    useEffect(() => {
        fetchApi()
    }, [])

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const items = exercises.slice(indexOfFirstItem, indexOfLastItem);
    const handlePageChange = (pageNumber) => {
      if (pageNumber === 0) return;
      setCurrentPage(pageNumber);
    };
    
    
  const handleRadioChange = (event) => {
    if (event.target.checked) {
      setModalVisible(true);
      setMostrarEjercicios(false);
    } else {
      setModalVisible(false);
      setMostrarEjercicios(true);
    }
  };

  const [rutina, setRutina] = useState(() => {
    const storedRutina = localStorage.getItem("rutina");
    return storedRutina ? JSON.parse(storedRutina) : [];
  })
  function seleccionarSerie(dia, bodyPart, equipment, gifUrl, name, target){
    const serie ={
        dia, bodyPart, equipment, gifUrl, name, target
    }
    setRutina([...rutina, serie])  
    console.log(rutina)
}

  const [favoritos, setFavoritos] = useState(() => {
    const storedFavoritos = localStorage.getItem("favoritos");
    return storedFavoritos ? JSON.parse(storedFavoritos) : [];
  });


  useEffect(() => {
    // Guardar la rutina en el localStorage
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  useEffect(() => {
    localStorage.setItem("rutina", JSON.stringify(rutina));
  }, [rutina])
  

  const agregarEjercicio = (exercise) => {
    setFavoritos([...favoritos, exercise]);
    console.log(favoritos);
  };

  const eliminarFavorito = (favoritoId) => {
    setFavoritos(favoritos.filter((favoritos) => favoritos.id !== favoritoId));
  };

  const handleSubmit = (filtro) => {
    setFilter(filtro)
    fetchApi()
  };


  const eliminarRutina = (id) => {

    const indice = rutina.findIndex((ejercicio) => ejercicio.target.id === id);
    if (indice !== -1) {
      const nuevaRutina = [...rutina];
      nuevaRutina.splice(indice, 1);
      setRutina(nuevaRutina);
      
    }
  }
  

 


  return (
    <Context.Provider value={{items, rutina, fetchApi, eliminarRutina, seleccionarSerie,ejercicioModal, ejercicioRutinaModal, setMostrarRutinaModal, handleModal, handleRutinaModal,mostrarRutinaModal, mostrarModal, setMostrarModal, mostrarEjercicios,handleSubmit, agregarEjercicio,eliminarFavorito,handleRadioChange, handlePageChange, favoritos, currentPage, modalVisible }}>
      {props.children}
    </Context.Provider>
  );
}
