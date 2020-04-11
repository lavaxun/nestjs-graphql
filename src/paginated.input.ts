import { Type } from '@nestjs/common';
import { ObjectType, Field, Int } from '@nestjs/graphql';

export default function PaginatedResponse<TItem>(TItemClass: Type<TItem>) {
  // `isAbstract` decorator option is mandatory to prevent registering in schema
  @ObjectType({ isAbstract: true })
  abstract class PaginatedResponseClass {
    @Field(type => [TItemClass])
    items: TItem[];
    total: number;
    hasMore: boolean;
  }
  return PaginatedResponseClass;
}