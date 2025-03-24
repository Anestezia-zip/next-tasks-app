import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-screen py-20 flex justify-center flex-col items-center">
    <h1 className="text-4xl font-extrabold uppercase">Task management application</h1>

    <div className="flex justify-center flex-col items-center">
      {/* <AddTodo /> */}

      <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
        {/* {data.map((todo, id) => (
          <div className="w-full" key={id}>
            <Todo todo={todo} />
          </div>
        ))} */}
      </div>
    </div>
  </div>
  );
}
