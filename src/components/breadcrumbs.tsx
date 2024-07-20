"use client";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MAX_VISIBLE_SEGMENTS = 4;

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const pathSegments: string[] = pathname.split("/").filter((seg) => seg);

  const renderBreadcrumbItems = (): React.ReactNode[] => {
    if (pathSegments.length <= MAX_VISIBLE_SEGMENTS) {
      return pathSegments.map((segment, index) =>
        renderBreadcrumbItem(segment, index, pathSegments.length)
      );
    }

    return [
      ...pathSegments
        .slice(0, 2)
        .map((segment, index) =>
          renderBreadcrumbItem(segment, index, pathSegments.length)
        ),
      <BreadcrumbEllipsis key="ellipsis" />,
      ...pathSegments
        .slice(-2)
        .map((segment, index) =>
          renderBreadcrumbItem(
            segment,
            pathSegments.length - 2 + index,
            pathSegments.length
          )
        ),
    ];
  };

  const renderBreadcrumbItem = (
    segment: string,
    index: number,
    totalSegments: number
  ): React.ReactNode => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const isLast = index === totalSegments - 1;
    const title = capitalizeFirstLetter(segment);

    return (
      <React.Fragment key={index}>
        <BreadcrumbItem>
          {isLast ? (
            <BreadcrumbPage>{title}</BreadcrumbPage>
          ) : (
            <BreadcrumbLink asChild>
              <Link href={href}>{title}</Link>
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {!isLast && <BreadcrumbSeparator />}
      </React.Fragment>
    );
  };

  return (
    <div className="bg-white">
      <Breadcrumb className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-3 lg:py-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/" className="flex items-center">
                <Home className="h-4 w-4 mr-2 " strokeWidth={"2px"} />
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {renderBreadcrumbItems()}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default Breadcrumbs;
