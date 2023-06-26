import { Button, buttonVariants } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";

export default function pageTaiwind() {
  return (
    <div>
      <h1 className="group border-2 text-[19px] w-[calc(100%_-_1000px)]  border-fv_primary-500 text-fv_primary-500 hover:border-fv_secondary-500 hover:transition-all">
        <p className="group-hover:text-fv_secondary-500 hover:transition-all">Taiwind page</p>
      </h1>
      <Button
        className={cn(buttonVariants({ variant: "link", size: "lg" }), "bg-blue-500", {
          "bg-red-500": true,
        })}
      >
        Click
      </Button>
    </div>
  );
}
