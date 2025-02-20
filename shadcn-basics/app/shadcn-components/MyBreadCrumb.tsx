
import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { BreadCrumbList } from '../defaults/BreadCrumbList';

const MyBreadCrumb = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {BreadCrumbList.map((item) => (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={item.link}>{item.title}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default MyBreadCrumb