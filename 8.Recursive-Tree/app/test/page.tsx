"use client";

import { ChangeEvent, ReactNode, useState } from "react";

interface Service {
  maso: string;
  name: string;
  active: boolean;
  children?: Service[];
}

export default function TestLogic() {
  const [serviceList, setServiceList] = useState<Service[]>([{ maso: "", name: "", active: true, children: [] }]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number, inputName: keyof Service) => {
    const { value } = e.target;
    const updatedServiceList = serviceList.map((service, i) =>
      i === index ? { ...service, [inputName]: value } : service
    );
    setServiceList(updatedServiceList);
  };

  const handleAddChild = (index: number) => {
    const updatedServiceList = [...serviceList];
    updatedServiceList[index].children?.push({ maso: "", name: "", active: true, children: [] });
    setServiceList(updatedServiceList);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { maso: "", name: "", active: true, children: [] }]);
  };

  const handleServiceRemove = (index: number) => {
    if (serviceList.length === 1) return;
    const updatedServiceList = [...serviceList];
    updatedServiceList.splice(index, 1);
    setServiceList(updatedServiceList);
  };

  const renderServiceList = (services: Service[]): ReactNode => {
    function handleToggleChange(index: number): void {
      throw new Error("Function not implemented.");
    }

    return (
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <div className="mb-2.5 flex items-center gap-2">
              <input
                className="border-2 border-sky-800"
                type="text"
                name="maso"
                value={service.maso}
                onChange={(e) => handleInputChange(e, index, "maso")}
              />
              <input
                className="border-2 border-red-800"
                type="text"
                name="name"
                value={service.name}
                onChange={(e) => handleInputChange(e, index, "name")}
              />
              <input
                type="checkbox"
                name="active"
                checked={service.active}
                onChange={() => handleToggleChange(index)}
              />
              <span>
                <button onClick={() => handleServiceRemove(index)}>X</button>
              </span>
              <button onClick={() => handleAddChild(index)}>Add Child</button>
            </div>
            {service.children && renderServiceList(service.children)}
          </li>
        ))}
      </ul>
    );
  };

  console.log(">>>>>", serviceList);

  return (
    <div>
      <div>
        <button onClick={handleServiceAdd}>Add Input</button>
      </div>
      <div>{renderServiceList(serviceList)}</div>
    </div>
  );

  // ...
}
//================================================================import React, { ChangeEvent, useState } from "react";

// interface Service {
//   maso: string;
//   name: string;
//   active: boolean;
//   children?: Service[];
// }

// export default function TestLogic() {
//   const [serviceList, setServiceList] = useState<Service[]>([{ maso: "", name: "", active: true, children: [] }]);

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number, inputName: keyof Service) => {
//     const { value } = e.target;
//     const updatedServiceList = serviceList.map((service, i) =>
//       i === index ? { ...service, [inputName]: value } : service
//     );
//     setServiceList(updatedServiceList);
//   };

//   const handleToggleChange = (index: number) => {
//     const updatedServiceList = serviceList.map((service, i) =>
//       i === index ? { ...service, active: !service.active } : service
//     );
//     setServiceList(updatedServiceList);
//   };

//   const handleAddChild = (parentIndex: number, childIndex: number) => {
//     const updatedServiceList = [...serviceList];
//     const parentService = updatedServiceList[parentIndex];
//     const newChild: Service = { maso: "", name: "", active: true, children: [] };
//     if (!parentService.children) {
//       parentService.children = [];
//     }
//     parentService.children.splice(childIndex + 1, 0, newChild);
//     setServiceList(updatedServiceList);
//   };

//   const handleServiceAdd = (index: number) => {
//     const updatedServiceList = [...serviceList];
//     const newService: Service = { maso: "", name: "", active: true, children: [] };
//     updatedServiceList.splice(index + 1, 0, newService);
//     setServiceList(updatedServiceList);
//   };

//   const handleServiceRemove = (parentIndex: number, childIndex: number) => {
//     const updatedServiceList = [...serviceList];
//     const parentService = updatedServiceList[parentIndex];
//     if (parentService.children && parentService.children.length > 0) {
//       parentService.children.splice(childIndex, 1);
//       setServiceList(updatedServiceList);
//     }
//   };

//   const renderServiceList = (services: Service[], parentIndex: number): React.ReactNode => {
//     return (
//       <ul>
//         {services.map((service, childIndex) => (
//           <li key={childIndex}>
//             <div className="mb-2.5 flex items-center gap-2">
//               <input
//                 className="border-2 border-sky-800"
//                 type="text"
//                 name="maso"
//                 value={service.maso}
//                 onChange={(e) => handleInputChange(e, parentIndex, "maso")}
//               />
//               <input
//                 className="border-2 border-red-800"
//                 type="text"
//                 name="name"
//                 value={service.name}
//                 onChange={(e) => handleInputChange(e, parentIndex, "name")}
//               />
//               <input
//                 type="checkbox"
//                 name="active"
//                 checked={service.active}
//                 onChange={() => handleToggleChange(parentIndex)}
//               />
//               <span>
//                 <button onClick={() => handleServiceRemove(parentIndex, childIndex)}>X</button>
//               </span>
//               <button onClick={() => handleServiceAdd(parentIndex)}>Add Child</button>
//             </div>
//             {service.children && renderServiceList(service.children, parentIndex + 1)}
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   console.log(">>>>>", serviceList);

//   return (
//     <div>
//       <div>
//         <button onClick={() => handleServiceAdd(-1)}>Add Input</button>
//       </div>
//       <div>{renderServiceList(serviceList, 0)}</div>
//     </div>
//   );
// }
