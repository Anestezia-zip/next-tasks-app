import AddTask from "@/components/tasks/AddTask";
import Task from "@/components/tasks/Task";
import { prisma } from "@/utils/prisma";

async function getData() {
  return await prisma.task.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: 'desc',
    }
  })
}

export default async function Home() {
  const data = await getData()
  return (
    <div className="w-screen max-w-full py-10 flex flex-col items-center overflow-hidden relative">
      <div className="big-circle"></div>
      <div className="small-circle"></div>
      <h1 className="text-4xl bg-amber-100 w-full text-center p-2 font-extrabold uppercase">Task management application</h1>

      <div className="flex justify-center flex-col bg-amber-100 rounded-3xl p-5 px-8 mt-8 mx-12">
        <div className="px-0.5 pb-2 my-2">
          <h2 className="font-bold">Today</h2>
          <h3>{new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</h3>
        </div>

        <AddTask />

        {data.length > 0 ? (
          <ul className="flex flex-col items-center justify-center mt-8 text-center">
            {data.map((task, i) => (
              <li className="w-full" key={i}>
                <Task task={task} />
              </li>
            ))}
          </ul>
        ) : (
          <h2 className="p-1 pt-8 font-bold text-center text-xl">List is empty</h2>
        )}
      </div>
    </div>
  );
}
