import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function GridItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="h-80">{children}</CardContent>
    </Card>
  );
}
