export class StatisticsModel {
  constructor(
    public department: string,
    public hours: number,
    public requestsNum: number,
    public status: number,
    public organization: string
  ) {}
}
