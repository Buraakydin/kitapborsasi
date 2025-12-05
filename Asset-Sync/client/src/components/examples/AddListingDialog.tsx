import { useState } from "react";
import AddListingDialog from "../AddListingDialog";
import { Button } from "@/components/ui/button";

export default function AddListingDialogExample() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <AddListingDialog
        open={open}
        onOpenChange={setOpen}
        onSubmit={(data) => console.log("Form submitted:", data)}
      />
    </div>
  );
}
