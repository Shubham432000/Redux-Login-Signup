import React from "react";
import { useSelector } from "react-redux";

const Ticket = () => {
  const detectForm = useSelector((state) => state.changeFormData);

  console.log("Ticket", detectForm.employees);
  return (
    <div>
      <table className="table-fixed border-collapse border border-slate-400">
        <thead>
          <tr>
            <th className="border border-slate-300">First name</th>
            <th className="border border-slate-300">Last name</th>
            <th className="border border-slate-300">Add1</th>
            <th className="border border-slate-300">Add2</th>
            <th className="border border-slate-300">Mobile no</th>
            <th className="border border-slate-300">Pan no</th>
            <th className="border border-slate-300">Gender</th>
            <th className="border border-slate-300">Martiual status</th>
          </tr>
        </thead>

        <tbody>
          {detectForm.employees.map((item,num) => (
            <tr key={num}>
              <td className="border border-slate-300">{item.first}</td>
              <td className="border border-slate-300">{item.last}</td>
              <td className="border border-slate-300">{item.add1}</td>
              <td className="border border-slate-300">{item.add2}</td>
              <td className="border border-slate-300">{item.mob}</td>
              <td className="border border-slate-300">{item.pan}</td>
              <td className="border border-slate-300">{item.gender}</td>
              <td className="border border-slate-300">{item.mart}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ticket;
