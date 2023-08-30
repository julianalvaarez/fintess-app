import ExerciseList from "../components/ExerciseList";
import Form from "../components/Form";
import Paginacion from "../components/Paginacion";

export const ExercisesPage = () => {
  return (
    <>
      <h1 className="text-green-800 font-extrabold text-6xl mt-28 mb-4 text-center font-mono">
        Fitness App - The Best Web for Gymrats
      </h1>
      <p className="text-center text-gray-600 text-lg font-semibold mb-20 w-auto mx-20">Discover a catalog of +1000 exercises, create your routine and save your favorite exercises.</p>
      <Form />
      <Paginacion />
      <ExerciseList />
    </>
  );
};
