export class RequestModel {
  constructor(
    public id: number,
    public requestorId: string,
    public requestorWO: string,
    public requestorFullName: string,
    public requestorWOManager: string,
    public requestorDepartment: string,
    public requestorForWO: string,
    public requestorForProject: string,
    public reason: string,
    public startTime: Date,
    public endTime: Date,
    public minutes: number,
    public status: string,
    public responseDate: Date | null,
    public createdAt: Date
  ) {}
}
