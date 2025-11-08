import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SearchInput() {
  return (
    <div className="flex items-center gap-2">
      <Input
        type="text"
        placeholder="Pesquise serviços ou barbearias"
        className="border-border rounded-full"
      />
      <Button variant="ghost" size="icon">
        <SearchIcon />
      </Button>
    </div>
  );
}
