import jsPDF from "jspdf";
import { saveAs } from "file-saver";

export const exportCSV = (tasks) => {

  const header = [
    "Title",
    "Description",
    "Category",
    "Priority",
    "Completed",
    "Due Date",
  ];

  const rows = tasks.map((task) => [

    task.title,

    task.description,

    task.category,

    task.priority,

    task.completed ? "Yes" : "No",

    task.dueDate || "",

  ]);

  const csv = [

    header,

    ...rows,

  ]
    .map((row) => row.join(","))

    .join("\n");

  const blob = new Blob(

    [csv],

    { type: "text/csv;charset=utf-8;" }

  );

  saveAs(blob, "TaskFlow_Tasks.csv");

};

export const exportPDF = (tasks) => {

  const pdf = new jsPDF();

  pdf.setFontSize(20);

  pdf.text("TaskFlow Tasks", 20, 20);

  let y = 35;

  tasks.forEach((task, index) => {

    pdf.text(

      `${index + 1}. ${task.title}`,

      20,

      y

    );

    y += 8;

    pdf.text(

      `Category : ${task.category}`,

      25,

      y

    );

    y += 8;

    pdf.text(

      `Priority : ${task.priority}`,

      25,

      y

    );

    y += 8;

    pdf.text(

      `Completed : ${task.completed ? "Yes" : "No"}`,

      25,

      y

    );

    y += 15;

    if (y > 270) {

      pdf.addPage();

      y = 20;

    }

  });

  pdf.save("TaskFlow_Tasks.pdf");

};