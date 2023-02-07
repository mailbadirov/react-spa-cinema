import { Component, ErrorInfo } from "react";
import { IErrorBoundaryProps, IErrorBoundaryState } from "./types";

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { error: "" };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error: `${error.toString()} ${errorInfo.componentStack}`,
    });
  }

  render() {
    const { error } = this.state;

    return error ? <div>{error}</div> : this.props.children;
  }
}

export default ErrorBoundary;
