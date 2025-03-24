import AddTask from "@/components/tasks/AddTask";
import { prisma } from "@/utils/prisma";
import Image from "next/image";

async function getData() {
  return await prisma.task.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: 'asc',
    }
  })
}

export default async function Home() {
  const data = await getData()
  return (
    <div className="w-screen max-w-full py-10 flex justify-center flex-col items-center overflow-hidden relative">
      <div className="big-circle"></div>

      <h1 className="text-4xl bg-amber-100 w-full text-center p-2 font-extrabold uppercase">Task management application</h1>

      <div className="flex justify-center flex-col bg-amber-100 rounded-3xl p-5 px-8 mt-8">
        <div className="px-2 pb-2 my-2">
        <h2 className="font-bold">Today</h2>
        <h3>March 26 2025</h3>
        </div>
        
        <AddTask />

        <ul className="flex flex-col gap-2 items-center justify-center mt-8 text-center">
          {data.map((task, i) => (
            <li className="w-full" key={i}>
              <div className="bg-[#aec4eb] p-2 px-3 rounded text-start">{task.title}</div>
              {/* <Todo task={task} /> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
