export class TransformObj {
    mergeObjects<T extends object, U extends object>(target: T, source: U): T & U {
      return { ...target, ...source };
    }
  }