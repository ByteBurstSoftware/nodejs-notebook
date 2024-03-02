/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Note } from "./Note";
import { NoteCountArgs } from "./NoteCountArgs";
import { NoteFindManyArgs } from "./NoteFindManyArgs";
import { NoteFindUniqueArgs } from "./NoteFindUniqueArgs";
import { CreateNoteArgs } from "./CreateNoteArgs";
import { UpdateNoteArgs } from "./UpdateNoteArgs";
import { DeleteNoteArgs } from "./DeleteNoteArgs";
import { User } from "../../user/base/User";
import { NoteService } from "../note.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Note)
export class NoteResolverBase {
  constructor(
    protected readonly service: NoteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Note",
    action: "read",
    possession: "any",
  })
  async _notesMeta(
    @graphql.Args() args: NoteCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Note])
  @nestAccessControl.UseRoles({
    resource: "Note",
    action: "read",
    possession: "any",
  })
  async notes(@graphql.Args() args: NoteFindManyArgs): Promise<Note[]> {
    return this.service.notes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Note, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Note",
    action: "read",
    possession: "own",
  })
  async note(@graphql.Args() args: NoteFindUniqueArgs): Promise<Note | null> {
    const result = await this.service.note(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Note)
  @nestAccessControl.UseRoles({
    resource: "Note",
    action: "create",
    possession: "any",
  })
  async createNote(@graphql.Args() args: CreateNoteArgs): Promise<Note> {
    return await this.service.createNote({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Note)
  @nestAccessControl.UseRoles({
    resource: "Note",
    action: "update",
    possession: "any",
  })
  async updateNote(@graphql.Args() args: UpdateNoteArgs): Promise<Note | null> {
    try {
      return await this.service.updateNote({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Note)
  @nestAccessControl.UseRoles({
    resource: "Note",
    action: "delete",
    possession: "any",
  })
  async deleteNote(@graphql.Args() args: DeleteNoteArgs): Promise<Note | null> {
    try {
      return await this.service.deleteNote(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Note): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}