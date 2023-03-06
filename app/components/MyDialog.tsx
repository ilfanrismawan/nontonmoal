import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const MyDialog = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <Dialog.Title>Hello</Dialog.Title>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MyDialog;
