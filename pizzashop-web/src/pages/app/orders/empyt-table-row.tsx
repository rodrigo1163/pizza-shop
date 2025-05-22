import { TableCell, TableRow } from "@/components/ui/table";

export function EmpytTableRow() {
  return (
    <TableRow>
      <TableCell colSpan={8} className="text-center">
        <span className="text-muted-foreground">Não há nenhum pedidos</span>
      </TableCell>
    </TableRow>
  );
}
